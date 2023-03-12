export const Contacts = () => {
    return (
        <main>
            <h3 className="font-extrabold mb-4 text-3xl">Contacts</h3>

            <p>EMAIL: ShexWeeknd@gmail.com</p>

            <form className="mt-5" action="">
                <div>
                    <label className="block" htmlFor="subject">Sujet du mail</label>
                    <input className="border" type="text" name="subject" id="subject" placeholder="Quel est le sujet" />
                </div>

                <div>
                    <label className="block" htmlFor="email">Email</label>
                    <input className="border" type="email" name="email" id="email" placeholder="votre email" />
                </div>

                <div>
                    <label className="block" htmlFor="message">Sujet du mail</label>
                    <textarea rows={5} className="border resize-none" name="message" id="message" placeholder="Inscrivez votre message ici" />
                </div>

                <input type="submit" className="block bg-[purple] text-[white] py-3 px-3 hover:bg-[gray]" />
            </form>
        </main>
    )
}