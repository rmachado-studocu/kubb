import transformers from '@kubb/core/transformers'
import { print } from '@kubb/parser'
import * as factory from '@kubb/parser/factory'
import { Editor, File, useApp } from '@kubb/react'
import { Oas, Schema } from '@kubb/swagger/components'
import { useOas, useOperation, useOperationManager } from '@kubb/swagger/hooks'

import { SchemaGenerator } from '../SchemaGenerator.tsx'

import type { KubbFile } from '@kubb/core'
import type { ts } from '@kubb/parser'
import type { OperationSchema as OperationSchemaType } from '@kubb/swagger'
import type { OperationSchemas } from '@kubb/swagger'
import type { Operation } from '@kubb/swagger/oas'
import type { ReactNode } from 'react'
import type { FileMeta, PluginOptions } from '../types.ts'

type Props = {}

function printCombinedSchema(name: string, operation: Operation, schemas: OperationSchemas): string {
  const properties: Record<string, ts.TypeNode> = {}

  if (schemas.response) {
    properties['response'] = factory.createTypeReferenceNode(factory.createIdentifier(schemas.response.name), undefined)
  }

  if (schemas.request) {
    properties['request'] = factory.createTypeReferenceNode(factory.createIdentifier(schemas.request.name), undefined)
  }

  if (schemas.pathParams) {
    properties['pathParams'] = factory.createTypeReferenceNode(factory.createIdentifier(schemas.pathParams.name), undefined)
  }

  if (schemas.queryParams) {
    properties['queryParams'] = factory.createTypeReferenceNode(factory.createIdentifier(schemas.queryParams.name), undefined)
  }

  if (schemas.headerParams) {
    properties['headerParams'] = factory.createTypeReferenceNode(factory.createIdentifier(schemas.headerParams.name), undefined)
  }

  if (schemas.errors) {
    properties['errors'] = factory.createUnionDeclaration({
      nodes: schemas.errors.map((error) => {
        return factory.createTypeReferenceNode(factory.createIdentifier(error.name), undefined)
      }),
    })!
  }

  const namespaceNode = factory.createTypeAliasDeclaration({
    name: operation.method === 'get' ? `${name}Query` : `${name}Mutation`,
    type: factory.createTypeLiteralNode(
      Object.keys(properties)
        .map((key) => {
          const type = properties[key]
          if (!type) {
            return undefined
          }

          return factory.createPropertySignature({
            name: transformers.pascalCase(key),
            type,
          })
        })
        .filter(Boolean),
    ),
    modifiers: [factory.modifiers.export],
  })

  return print(namespaceNode)
}

export function OperationSchema({}: Props): ReactNode {
  return <></>
}

type FileProps = {}

OperationSchema.File = function ({}: FileProps): ReactNode {
  const { pluginManager, plugin, mode } = useApp<PluginOptions>()
  const oas = useOas()
  const { getSchemas, getFile, getName } = useOperationManager()
  const operation = useOperation()

  const file = getFile(operation)
  const schemas = getSchemas(operation)
  const factoryName = getName(operation, { type: 'type' })
  const generator = new SchemaGenerator(plugin.options, {
    oas,
    plugin,
    pluginManager,
    mode,
  })

  const items = [schemas.pathParams, schemas.queryParams, schemas.headerParams, schemas.statusCodes, schemas.request, schemas.response].flat().filter(Boolean)

  const mapItem = ({ name, schema: object, ...options }: OperationSchemaType, i: number) => {
    return (
      <Oas.Schema key={i} generator={generator} name={name} object={object}>
        {mode === 'split' && <Schema.Imports isTypeOnly />}
        <File.Source>
          <Schema.Source options={options} />
        </File.Source>
      </Oas.Schema>
    )
  }

  return (
    <Editor language="typescript">
      <File<FileMeta> baseName={file.baseName} path={file.path} meta={file.meta}>
        {items.map(mapItem)}

        <File.Source>{printCombinedSchema(factoryName, operation, schemas)}</File.Source>
      </File>
    </Editor>
  )
}
