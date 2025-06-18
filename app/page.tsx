import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Popular Companions</h1>
            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura the Brainy Explorer"
                    topic="Nerural Network of the brain"
                    subject="Science"
                    duration={45}
                    color="#fcf3cf"
                />
                <CompanionCard
                    id="456"
                    name="Verba the Vocabulary Builder"
                    topic="English Literature"
                    subject="Language"
                    duration={30}
                    color="#abebc6"
                />
                <CompanionCard
                    id="789"
                    name="Countsy the Number Wizard"
                    topic="Directives and Integers"
                    subject="Math"
                    duration={30}
                    color="#fadbd8"
                />
            </section>

            <section className="home-section">
                <CompanionList
                title="Recently complted sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
                />
                <Cta/>
            </section>
        </main>
    )
}

export default Page