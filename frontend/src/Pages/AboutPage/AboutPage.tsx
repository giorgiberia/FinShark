import React from "react";

const AboutPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="max-w-5xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">ჩვენი მისია</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        ჩვენი მისიაა, დავეხმაროთ ადამიანებს არა მხოლოდ მათი პირადი მიზნების მიღწევაში,
                        არამედ სხვათა დახმარებაში. ჩვენ მტკიცედ გვჯერა, რომ ყველას აქვს ძალა
                        შეცვალოს სამყარო უკეთესობისკენ, და ეს დაწყება შეიძლება იყოს ერთი პატარა ნაბიჯით.
                    </p>
                </header>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">როგორ მუშაობს ჩვენი ქველმოქმედება</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        ჩვენი პლატფორმის გამოყენებით, თქვენ არა მხოლოდ იღებთ 49 დღიან გეგმას
                        თქვენი პირადი განვითარებისთვის, არამედ ხელს უწყობთ საზოგადოებასაც.
                        თქვენი მიერ გადახდილი თანხა სრულად გადაეცემა ქველმოქმედებას და გამოიყენება
                        სხვადასხვა სოციალურ პროექტებში.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">მიმდინარე პროექტები</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                        <li>საკვების პროგრამა ბავშვებისთვის - ვეხმარებით მცირებიუჯეტიან ოჯახებს და ბავშვებს, რომლებსაც სჭირდებათ საკვები და საყოფაცხოვრებო ნივთები.</li>
                        <li>განათლების მხარდაჭერა - ვაფინანსებთ სასწავლო მასალების და სასწავლო კურსების შეძენას ბავშვებისთვის და ახალგაზრდებისთვის, რომლებიც ისწრაფვიან უკეთესი განათლებისთვის.</li>
                        <li>სამედიცინო დახმარება - ვეხმარებით პაციენტებს, რომლებიც საჭიროებენ სასწრაფო სამედიცინო დახმარებას, მედიკამენტებს და მკურნალობას.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ჩვენი პარტნიორები</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                        <li>საქველმოქმედო ფონდი "სახელი"</li>
                        <li>საერთაშორისო ჰუმანიტარული ორგანიზაცია "სახელი"</li>
                        <li>ადგილობრივი NGO "სახელი"</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">როგორ შეგიძლიათ მონაწილეობა</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                        <li>შემოწირულობა - ნებისმიერ დროს შეგიძლიათ გააკეთოთ შემოწირულობა, რაც ხელს შეუწყობს ჩვენს მიმდინარე და მომავალ პროექტებს.</li>
                        <li>მოხალისეობა - შეუერთდით ჩვენს გუნდს მოხალისედ და მიიღეთ მონაწილეობა ჩვენს სხვადასხვა აქტივობებში.</li>
                        <li>გაზიარება - გაუზიარეთ ინფორმაცია ჩვენს შესახებ თქვენს მეგობრებსა და ოჯახის წევრებს, რათა უფრო მეტი ადამიანი ჩაერთოს ჩვენს ქველმოქმედებაში.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ჩვენი წარმატების ისტორიები</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                        <li>ისტორია 1: დახმარების პროგრამა, რომელმაც გადაარჩინა 100-ზე მეტი ბავშვის სიცოცხლე.</li>
                        <li>ისტორია 2: საგანმანათლებლო პროექტი, რომელმაც უზრუნველყო 50 ბავშვის სწავლის გაგრძელება.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">დაგვიკავშირდით</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        თუ გსურთ გაიგოთ მეტი ჩვენი ქველმოქმედების შესახებ, შეგიძლიათ დაგვიკავშირდეთ:
                    </p>
                    <ul className="text-lg text-gray-600 leading-relaxed">
                        <li>ელფოსტა: info@example.com</li>
                        <li>ტელეფონი: +995 123 456 789</li>
                        <li>მისამართი: თბილისი, საქართველო</li>
                    </ul>
                </section>

                <footer className="mt-10 text-center text-gray-500">
                    <p>შეუერთდით ჩვენს მისიას და ერთად შევცვალოთ სამყარო უკეთესობისკენ!</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutPage;
