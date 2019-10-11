import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hyperledger',
                  imageUrl: 'https://pbs.twimg.com/profile_images/697035383679295488/_6vl74tM_400x400.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'magento',
                  imageUrl: 'https://www.msts.com/sites/default/files/styles/earned_media_mobile/public/node/news/images/Magento.jpeg?itok=66Q9fWqj',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'angular',
                  imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'react',
                  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'ionic',
                  imageUrl: '',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        };
    } // constructor ending

    render() {
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                )) }
            </div>
        )
    }

}

export default Directory;