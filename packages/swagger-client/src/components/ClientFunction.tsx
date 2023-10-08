import React from 'react'
import type { ReactNode } from 'react'
import { Function, createIndent } from '@kubb/react-template'
import type { HttpMethod } from '@kubb/swagger'

type Props = {
  name: string
  generics: string[]
  returnType: string
  params: string
  method: HttpMethod
  url: string
  clientGenerics: string[]
  withParams?: boolean
  withData?: boolean
  withHeaders?: boolean
  comments: string[]
  children?: ReactNode
}

export function ClientFunction({
  name,
  generics,
  returnType,
  params,
  method,
  url,
  clientGenerics,
  withParams,
  withData,
  withHeaders,
  comments,
  children,
}: Props): React.ReactNode {
  const clientParams = [
    `method: "${method}"`,
    `url: ${url}`,
    withParams ? 'params' : undefined,
    withData ? 'data' : undefined,
    withHeaders ? 'headers: { ...headers, ...options.headers }' : undefined,
    '...options',
  ].filter(Boolean)

  const clientOptions = `${createIndent(4)}${clientParams.join(`,\n${createIndent(4)}`)}`

  return (
    <>
      <Function name={name} async export generics={generics} returnType={returnType} params={params} JSDoc={{ comments }}>
        {`
const { data: resData } = await client<${clientGenerics.join(', ')}>({
${clientOptions}
});

return resData;`}
        {children}
      </Function>
    </>
  )
}
