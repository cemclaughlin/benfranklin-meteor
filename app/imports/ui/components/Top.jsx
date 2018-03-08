import React from 'react';
import { Container, Grid, Search, Image } from 'semantic-ui-react';

export default class Top extends React.Component {

  render() {
    return (
        <Container className="new">
          <Grid columns={3}>
            <Grid.Column></Grid.Column>
            <Grid.Column verticalAlign = "middle">
              <Image centered src="http://benfranklinhawaii.com/images/logo_img.png" width="300" height="68"/>
            </Grid.Column>
            <Grid.Column position = "right" verticalAlign = "middle"><Search></Search> </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

