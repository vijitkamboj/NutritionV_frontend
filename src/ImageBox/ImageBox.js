import React, {
    Component
} from 'react';
import {Image} from 'semantic-ui-react';
import './ImageBox.css';

class ImageBox extends Component {
    state = {
        file: false
    }

    render() {
        if (this.state.file) {
            return(
                <div id='ImageBox'>
                    <Image src={this.state.file}/>
                </div>
            )
        } else {
            return(null)
        }
    }
}


export default ImageBox;
