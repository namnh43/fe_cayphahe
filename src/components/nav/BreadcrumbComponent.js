import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";

export function BreadcrumbComponent({items}) {
    return (
        <Breadcrumb>
            {items.map((item,key) => {
                return (
                    <Breadcrumb.Item active={item.link ? false:true}>
                        {item.link ? (<Link to={item.link}>{item.text}</Link>) : (
                            <span>{item.text}</span>
                        )}
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    );
}