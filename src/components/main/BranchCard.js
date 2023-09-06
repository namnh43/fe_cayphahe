import {Button, Card} from "react-bootstrap";
import './BranchCard.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router';

export function BranchCard({ava,title,text,refDetail,id}) {
    const navigate = useNavigate();
    return (
        <Card

            style={{ width: '22rem' }}
            className="card-container">
            <Card.Img variant="top" src={ava?ava:"https://mui.com/static/images/cards/contemplative-reptile.jpg"} />
            <Card.Body>
                <Card.Title>{title} - {id}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end w-100"><span className="ml-auto">Trưởng chi(ông): <Link to= {`/people/${refDetail.id}`}>{refDetail.name}</Link></span></Card.Footer>
                <Button
                    variant="primary"
                    onClick={() => {
                        console.log(id);
                        const url = '/branch/' + id;
                        navigate(url)
                    }}
                >Chi tiết</Button>
            </Card.Body>
        </Card>
    )
}