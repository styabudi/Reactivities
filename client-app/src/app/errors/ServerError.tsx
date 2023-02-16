import { Container, Header, Segment } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function ServerError() {
    const { commonStore } = useStore();
    return (
        <Container>
            <Header as={'h1'} content="Server Error"></Header>
            <Header sub as={'h5'} color="red" content={commonStore.error?.message}></Header>
            {commonStore.error?.details && (
                <Segment>
                    <Header as={'h4'} content='Stack trace' color="teal"></Header>
                    <code style={{ marginTop: '10px' }}>{commonStore.error.details}</code>
                </Segment>
            )}
        </Container>
    )
}