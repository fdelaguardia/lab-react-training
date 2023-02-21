

const Random = ({min, max}) => {
    return (
        <div>
            <p>Random Value between {min} and {max} {'=>'} {String(Math.round(Math.random()*max))}</p>
        </div>
    )
}

export default Random;