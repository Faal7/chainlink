import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-static'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PaddedCard from 'components/PaddedCard'
import Title from 'components/Title'
import Breadcrumb from 'components/Breadcrumb'
import BreadcrumbItem from 'components/BreadcrumbItem'
import Form from 'components/Bridges/Form'
import { submitBridgeType } from 'actions'
import matchRouteAndMapDispatchToProps from 'utils/matchRouteAndMapDispatchToProps'

const styles = theme => ({
  breadcrumb: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  }
})

const successNotification = ({name}) => (<>
  Successfully created <Link to={`/bridges/${name}`}>{name}</Link>
</>)

const errorNotification = ({name}) => (
  <>Error creating {name}</>
)

const New = props => (
  <>
    <Breadcrumb className={props.classes.breadcrumb}>
      <BreadcrumbItem href='/'>Dashboard</BreadcrumbItem>
      <BreadcrumbItem>></BreadcrumbItem>
      <BreadcrumbItem href='/bridges'>Bridges</BreadcrumbItem>
      <BreadcrumbItem>></BreadcrumbItem>
      <BreadcrumbItem>New</BreadcrumbItem>
    </Breadcrumb>
    <Title>New Bridge</Title>

    <Grid container spacing={40}>
      <Grid item xs={12}>
        <PaddedCard>
          <Form
            actionText='Create Bridge'
            onSubmit={props.submitBridgeType}
            onSuccess={successNotification}
            onError={errorNotification}
          />
        </PaddedCard>
      </Grid>
    </Grid>
  </>
)

export const ConnectedNew = connect(
  null,
  matchRouteAndMapDispatchToProps({submitBridgeType})
)(New)

export default withStyles(styles)(ConnectedNew)