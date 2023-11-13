import Layout from "@/components/layout";
import {contactInfo} from "@/utils/data";
import Svg from "@/components/global/svg";
import Input from "@/components/inputs/input";
import {Formik} from "formik";
import * as Yup from 'yup';
import {useRouter} from "next/router";
import Button from "@/components/inputs/button";
import Start from "@/components/global/start-journey";
import Image from "next/image";

const Contact = ()=>{
    const router = useRouter()
    const formHandler=(values:any)  =>{
        router.push("/")
    }
    const Schema = Yup.object().shape({
        "full_name": Yup.string().required('Full name is required'),
        "phone_number": Yup.string().required('Phone number is required'),
        "email_address": Yup.string().required('Email is required'),
        "enquiry": Yup.string().required('Enquiry is required'),
    });

    return (
        <Layout>
          <article className={``}>
             <div className={`hero h-96 bg-red-700 z-0 `}>
                 <div className={`w-[100%] h-96 mix-blend-darken z-30 flex flex-col items-center justify-center`}>
              <h1 className={`text-black text-md sm:text-lg md:text-2xl lg:text-4xl font-nunito font-700`}>Contact Us</h1>
                     <p className={`mt-4 font-nunito font-500 text-md md:text-lg lg:text-xl  `}>Send us a message and we will get in touch with you soonest.</p>
                 </div>
             </div>
          </article>
            <article className={`md:flex md:w-[750px] mx-auto mt-16`} >
                <div className={`bg-[#3137BD] rounded-tl-3xl rounded-bl-3xl w-[60%] max-w-xs mx-auto p-10 md:h-[50%]`}>
                <h3 className={`text-white font-dmSans font-500`}>Contact Information</h3>
                <div className={`mt-7`}>
                {contactInfo.map((contact)=>{
                    const {id, icon, info} = contact
                  return (
                      <div className={`font-nunito mt-6 flex space-x-4 items-center`} >
                         <Svg icon={icon}/>
                          <p className={`font-400 text-white`}>{info}</p>
                      </div>
                  )
                })}
                </div>
                </div>
                <Formik
                    initialValues={{
                        "full_name": "",
                        "phone_number": "",
                        "email_address": "",
                        "enquiry": ""
                    }}
                    onSubmit={(values => formHandler(values))}
                    validationSchema={Schema}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
                        <div className={`border w-[80%] xl:w-[100%] max-w-md mx-auto p-10 pb-28 md:pb-10 mt-4 md:mt-0 rounded-b-2xl rounded-tr-2xl`}>
                        <Input
                            setValue={(value)=>{setFieldValue("full_name",value)}}
                            label={"Full Name"}
                            placeholder={"Enter Full name"}
                            cs={"mt-5 w-[100%] "}
                            value={values.full_name}
                            error={errors.full_name}
                        />
                            <Input
                            setValue={(value)=>{setFieldValue("phone_number",value)}}
                            label={"Phone Number"}
                            placeholder={"Enter Phone Number"}
                            cs={"mt-5 w-[100%]"}
                            value={values.phone_number}
                            error={errors.phone_number}
                        />
                            <Input
                            setValue={(value)=>{setFieldValue("email_address",value)}}
                            label={"Email Address"}
                            placeholder={"Enter address"}
                            cs={"mt-5 w-[100%]"}
                            value={values.email_address}
                            error={errors.email_address}
                            type={"email"}
                        />
                            <Input
                            setValue={(value)=>{setFieldValue("enquiry",value)}}
                            label={"What are you making enquiry on"}
                            placeholder={"message"}
                            cs={"mt-5 w-[100%]"}
                            value={values.enquiry}
                            error={errors.enquiry}
                        />
                            <Button
                                title={"Submit"}
                                className={"bg-primaryText text-white mt-10 float-right"}
                                onClick={handleSubmit}
                            />
                        </div>
                    )}
                </Formik>
            </article>
            <Start/>
        </Layout>
    )
}
export default Contact

