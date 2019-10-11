import React from 'react';
import './app-detail.styles.scss';
import CustomSelect from '../custom-select/custom-select.component';
import CustomButton from '../custom-button/custom-button.component';

class AppDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.match.params.id);

    }
    render() {
        return (
            <div className='application-detail'>
                <div className="application-info">
                    <span className='application-title'>Docker</span>
                    <hr className='divider'/>
                    <span className='application-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et architecto quae sunt repellendus eos beatae doloremque esse perspiciatis nisi officiis ex adipisci itaque amet, sint, ipsa eligendi ullam? Praesentium, voluptas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, quod! Reprehenderit debitis dolore, ea quo vitae eaque quibusdam dolores culpa excepturi voluptatem accusamus, ratione, amet nobis necessitatibus! Minus, nihil facere.</span>
                    <div className="application-add-to-stack">
                        <CustomButton type="submit" value='Submit Form'>Add to stack</CustomButton>
                    </div>
                </div>
                <div className='application-option'>
                    <div className="application-version">
                        <span className="application-version__helper-text">Select your version</span>
                        <CustomSelect options={['1.22.0', '2.11.3', '3.22.1']} />
                    </div>
                    <div className="application-os">
                        <span className="application-os__helper-text">Select you operating system</span>
                        <CustomSelect options={['Linux', 'Mac', 'Windows']} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppDetail;