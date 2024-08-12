import React from "react";

const MotivationPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="max-w-5xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">მოტივაცია და ინსპირაცია</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        აქ ნახავთ შთამაგონებელ სტატიებს, ვიდეოებსა და აუდიო მასალას, რომლებიც დაგეხმარებათ მიზნების მიღწევაში და მოტივაციის შენარჩუნებაში.
                    </p>
                </header>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">მოტივაციური სტატიები</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                        <li>თვითგანვითარება: როგორ გავაუმჯობესოთ ჩვენი უნარ-ჩვევები და შესაძლებლობები</li>
                        <li>მიზნების მიღწევა: წარმატების საიდუმლოებები და მეთოდები</li>
                        <li>მოტივაცია: როგორ შევინარჩუნოთ მოტივაცია ყოველდღიურ ცხოვრებაში</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ვიდეო და აუდიო მასალა</h2>
                    <div className="space-y-4">
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-semibold text-gray-700">მოტივაციური ვიდეო 1</h3>
                            <p className="text-gray-600">შთამაგონებელი ვიდეო, რომელიც დაგეხმარებათ განახორციელოთ თქვენი მიზნები.</p>
                            <video controls className="w-full mt-2 rounded-lg">
                                <source src="video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-semibold text-gray-700">მოტივაციური პოდკასტი</h3>
                            <p className="text-gray-600">მოუსმინეთ შთამაგონებელ პოდკასტს, რომელიც დაგეხმარებათ მოტივაციის შენარჩუნებაში.</p>
                            <audio controls className="w-full mt-2">
                                <source src="podcast1.mp3" type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">შესაძლებლობები მონაწილეობისთვის</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        გსურთ გააზიაროთ თქვენი საკუთარი ისტორიები და წარმატებები? გაგვიზიარეთ თქვენი გამოცდილება და
                        ინსპირაცია სხვა მომხმარებლებს!
                    </p>
                    <button className="mt-4 px-6 py-3 bg-lightGreen text-white font-bold rounded-lg hover:opacity-70">
                        გააზიარეთ თქვენი ისტორია
                    </button>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ცნობილი გამონათქვამები</h2>
                    <div className="space-y-4">
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <blockquote className="text-xl italic text-gray-700">
                                "მოთმინება და შრომა ყველაფერს გადალახავს." - უცნობი ავტორი
                            </blockquote>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <blockquote className="text-xl italic text-gray-700">
                                "მიზანი არ არის მხოლოდ მიზანი, ის არის გზა." - ძველი სიბრძნე
                            </blockquote>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <blockquote className="text-xl italic text-gray-700">
                                "ჩვენ შეგვიძლია შევცვალოთ სამყარო ჩვენი მოქმედებებით." - ცნობილი მოტივატორი
                            </blockquote>
                        </div>
                    </div>
                </section>

                <footer className="mt-10 text-center text-gray-500">
                    <p>შეინარჩუნეთ მოტივაცია და მიყევით თქვენს მიზნებს!</p>
                </footer>
            </div>
        </div>
    );
};

export default MotivationPage;
