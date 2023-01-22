import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda adipisci placeat ea ex odio necessitatibus quis, vero officia dolore numquam? Magnam labore delectus tenetur corporis officia officiis? Ipsam, facilis.</p>

            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}