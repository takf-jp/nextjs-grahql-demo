import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { CreateUser } from '../components/CreateUser'

const HooksMemo: VFC = () => {
  return (
    <Layout title="hooks memo">
      <CreateUser />
    </Layout>
  )
}

export default HooksMemo
