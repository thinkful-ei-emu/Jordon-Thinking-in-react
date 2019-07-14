import React from 'react';
import Feature from './Feature'

class FeaturesList extends React.Component {
    render() {
        const features = Object.keys(this.props.features)
            .map(category => {
                const options = this.props.features[category].map((item, index) => {
                    const selectedClass = item.name === this.props.selected[category].name ? 'feature__selected' : '';
                    const featureClass = 'feature__option ' + selectedClass;
                    return <Feature key={index} featureHeader={category} item={item} featureClass={featureClass} updateFeature={this.props.updateFeature} />
                });

                return <div className="feature" key={category}>
                    <div className="feature__name">{category}</div>
                    <ul className="feature__list">
                        {options}
                    </ul>
                </div>
            });


        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>

        )
    }
}

export default FeaturesList;