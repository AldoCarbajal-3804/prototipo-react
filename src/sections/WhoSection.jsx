import ai from "../assets/images/ai.webp"
import company from "../assets/images/company.webp"
import innovation from "../assets/images/innovation.webp"
import latam from "../assets/images/latam.webp"
import leader from "../assets/images/leader.webp"
import team from "../assets/images/team.webp"
import { CardWork } from "../components/CardWork"

function WhoSection(){

    return(
        <div id="who-section" className="bg-blue-200 py-10 border-b-2 border-gray-600">
            <h3 className="text-gray-700 mb-14 text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
                Who we work with
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
                <CardWork 
                    title="Growing companies"
                    desc="Businesses facing operational inefficiencies and looking to scale through structured digital solutions."
                    img={ai}
                />
                <CardWork 
                    title="Company Partners"
                    desc="We collaborate with leading companies to create impactful projects."
                    img={company}
                />
                <CardWork 
                    title="Innovation Labs"
                    desc="Our innovation labs foster creativity and technological advancement."
                    img={innovation}
                />
                <CardWork 
                    title="LATAM Markets"
                    desc="We tailor our solutions to meet the unique needs of LATAM markets."
                    img={latam}
                />
                <CardWork 
                    title="Leadership Team"
                    desc="Our leadership team guides us toward our vision and goals."
                    img={leader}
                />
                <CardWork 
                    title="Diverse Team"
                    desc="We bring together a diverse team of experts to tackle complex challenges."
                    img={team}
                />
            </div>
        </div>
    )

}

export default WhoSection