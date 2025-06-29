import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";


const Page = () => {
    return (
        <main>
            <h1 className="">Popular Companions</h1>
            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura the Brainy Explorer"
                    topic="Neural Network of the Brain"
                    subject="science"
                    duration={45}
                    color="#FFda6e"
                />
                <CompanionCard
                    id="456"
                    name="Counsy the Number Wizard"
                    topic="Derivatives and Integrals"
                    subject="maths"
                    duration={30}
                    color="#E5D0FF"
                />
                <CompanionCard
                    id="789"
                    name="Verba the Vocabulary Builder"
                    topic="English Literature"
                    subject="language"
                    duration={30}
                    color="#BDE7FF"
                />

            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently completed sessions"
                    companions={recentSessions}
                    classNames='w-2/3 max-lg:w-full'
                />
                <CTA/>

            </section>
        </main>
    )
}

// @ts-expect-error jsjsjjs
export default Page