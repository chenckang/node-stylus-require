import flux from '../dispatcher/control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from '../actions/DummyActions';

@createStore(flux)
class DummyStore {

    @bind(actions.updateName)
    updateName(name) {
        this.name = name;
    }

    name = "awesome";
}

export default DummyStore;