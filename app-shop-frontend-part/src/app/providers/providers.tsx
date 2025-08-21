import type { JSX } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { FallBack } from '@/shared/ui/fallback'

export function Providers({ children }: { children: JSX.Element }) {
  return <ErrorBoundary FallbackComponent={FallBack}>{children}</ErrorBoundary>
}
