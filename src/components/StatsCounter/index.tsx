import React from "react"

type Props = {
    value: number
    id: string
}

export default class StatsCounter extends React.Component {
    constructor(props: Props) {
        super(props)
    }
    handleFollowers = ({ value, id }: Props) => {
        if (id === "Followers") {
            return [value, id]
        }
    }
    handleFollowing = ({ value, id }: Props) => {
        if (id === "Following") {
            return [value, id]
        }
    }
    render(this: any) {
        let ArrFlwrs = this.handleFollowers(this.props)
        let ArrFlwng = this.handleFollowing(this.props)
        return (
            <div className="container">
                <p>
                    {this.props.id === "Followers" ? ArrFlwrs[0] : ArrFlwng[0]}
                </p>
                <p>
                    {this.props.id === "Followers" ? ArrFlwrs[1] : ArrFlwng[1]}
                </p>
            </div>
        )
    }
}
