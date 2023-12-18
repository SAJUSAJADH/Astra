import Background from '../assets/bg.jpg'


export default function Ticket(){

    return(
        <>
            <div className="w-full bg-no-repeat bg-cover bg-center h-screen " style={{backgroundImage: ` url(${Background})`}}>
                
            </div>
        </>
    )
}