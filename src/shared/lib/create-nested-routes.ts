type RoutesShape = {
  [key: string]: string | RoutesShape
}

type CreateRoutes<T extends RoutesShape, Base extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? `${Base}${T[K]}`
    : {
        root: `${Base}/${Extract<K, string>}`
      } & CreateRoutes<T[K], `${Base}/${Extract<K, string>}`>
}

export function createRoutes<T extends RoutesShape>(
  base: string,
  shape: T,
): { root: string } & CreateRoutes<T, typeof base> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const build = (prefix: string, tree: RoutesShape): any => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = { root: prefix }
    for (const [key, value] of Object.entries(tree)) {
      if (typeof value === 'string') {
        result[key] = prefix + value
      } else {
        result[key] = build(prefix + '/' + key, value)
      }
    }
    return result
  }

  return build(base, shape)
}
