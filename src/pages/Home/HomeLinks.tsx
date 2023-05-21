import { LinkType } from "../../components/SimpleLink/LinkType";
import { SimpleLink } from "../../components/SimpleLink/SimpleLink";
import { Route } from "../../routing/Route";

export function HomeLinks() {
    return (
        <div className="home__links">
            <SimpleLink
                className="home__link"
                to={Route.REGISTER}
                type={LinkType.PRIMARY}>
                Register
            </SimpleLink>
            <SimpleLink
                className="home__link"
                to={Route.LOGIN}
                type={LinkType.SECONDARY}>
                Login
            </SimpleLink>
        </div>
    );
}