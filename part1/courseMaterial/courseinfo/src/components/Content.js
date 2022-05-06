import Part from "./Part";

const Content = (props) => (
    <div>
        <Part part={props.contents[0].name}
              exercise={props.contents[0].exercise} />
        <Part part={props.contents[1].name}
              exercise={props.contents[1].exercise} />
        <Part part={props.contents[2].name}
              exercise={props.contents[2].exercise} />
    </div>
)

export default Content