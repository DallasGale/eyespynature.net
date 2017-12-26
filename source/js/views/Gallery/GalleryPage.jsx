import React from 'react';
import { Grid } from 'semantic-ui-react';

import FilterSearch from './FilterSearch';
import GalleryArray from './GalleryArray';

// start //

export const GalleryPage = (props) => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={ 6 }>
            <FilterSearch
              filterText={ props.filterText }
              onFilterTextChange={ props.handleFilterTextChange }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <GalleryArray
        filterText={ props.filterText }
        products={ props.products }
        images={ props.images }
      />
    </div>
  );
}

GalleryPage.propTypes = {
  filterText: React.PropTypes.string,
  handleFilterTextChange: React.PropTypes.func,
  images: React.PropTypes.array,
};
