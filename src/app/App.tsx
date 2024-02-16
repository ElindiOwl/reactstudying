import Button from '../shared/Button';
import Alert from '../shared/Alert';
import { useState } from 'react';
import ListGroup from '../shared/ListGroup';

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    let items = ['bastard sword', 'Rapier', 'Javelin', 'zweihander', 'halberd'];
    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const onVisible = (isVisible: boolean) => () => {
        setAlertVisibility(isVisible)
    }

    return (<div>
        {alertVisible && <Alert onClose={onVisible(false)}>Close me as you will</Alert>}

        <Button color='primary' onclick={() => setAlertVisibility(true)}>
            Press me
        </Button>

        <ListGroup items={items} heading='Cross medieval swords' onSelectItem={handleSelectItem}></ListGroup>

    </div>);

}

export default App;