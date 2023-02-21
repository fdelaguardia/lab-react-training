

const Greetings = ({ lang, children}) => {


    let greetingSpan = ''

    const chooseGreeting = (lang) => {
        switch(lang) {
            case 'de':
                greetingSpan = 'Hallo'
                break;
            case 'fr':
                greetingSpan = 'Bonjour'
                break;
    
            case 'es':
                greetingSpan = 'Que bola'
                break;
    
            case 'en':
                greetingSpan = 'Hello'
                break;
            
            default:
                greetingSpan = 'Unkown Language'
            break;
    
        }       
    }

    chooseGreeting(lang)
    

    return (
        <div id='greeting'>
            <p>{greetingSpan} {children}</p>
        </div>
    )
}


export default Greetings