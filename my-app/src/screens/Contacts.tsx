import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contacts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            "service_v3t3mom",
            "template_hnqz2md",
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            "NB7HdcMddHibzkIet"
        )
    }

    return (
        <main>
            <h3 className="font-extrabold mb-4 text-3xl">Contacts</h3>

            <p>EMAIL: ShexWeeknd@gmail.com</p>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block" htmlFor="subject">Sujet du mail</label>
                    <input {...register("subject")} className="border" type="text" name="subject" id="subject" placeholder="Quel est le sujet" />
                </div>

                <div>
                    <label className="block" htmlFor="email">Email</label>
                    <input {...register("email"), { required: true }} className="border" type="email" name="email" id="email" placeholder="votre email" />
                </div>
                {errors.email && <p className="texct-[red]">Email requis</p>}

                <div>
                    <label className="block" htmlFor="message">Sujet du mail</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" name="message" id="message" placeholder="Inscrivez votre message ici" />
                </div>

                <input type="submit" className="block bg-[purple] text-[white] py-3 px-3 hover:bg-[gray]" />
            </form>
        </main>
    )
}
