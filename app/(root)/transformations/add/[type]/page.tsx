import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {

  // current loged in user in clurk 
  const { userId } = auth();

  const transformation = transformationTypes[type]



  // mongo db data base user loged in user
  const user = await getUserById(userId)


  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className=" mt-10">
        
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}

      />

      </section>

    </>
  )
}

export default AddTransformationTypePage