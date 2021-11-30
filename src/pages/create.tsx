import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateInputs = {
  name: string
  about: string
  location: string
  // upload files?
}

export default function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateInputs>()
  const onSubmit: SubmitHandler<CreateInputs> = (data) => console.log(data)

  const router = useRouter()
  const [session, loading] = useSession()

  // if (!loading && !session) {
  //   router.push('/')
  //   return null
  // }

  return (
    <>
      <h1>Create a new buziness</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
        />
        <label htmlFor="about">About</label>
        <textarea id="about" {...register('name', { required: true })} />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          {...register('name', { required: true })}
        />
        <button type="submit">Create</button>
      </form>
    </>
  )
}
