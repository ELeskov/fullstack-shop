export function FallBack({ error }: { error?: Error }) {
  return (
    <div>
      Что-то пошло не так <br />
      <pre>{error?.message}</pre>
    </div>
  )
}
