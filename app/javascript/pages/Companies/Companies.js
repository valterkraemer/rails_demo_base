import React, { useState, useEffect } from 'react'
import PageHeader from "../../components/PageHeader";
import CountGrid from "./CountGrid";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    paper: {
        height: 140,
        width: 100
    }
}))


const headCells = [
    { id: 'id', label: 'Id', disableSorting: true },
    { id: 'name', label: 'Name', disableSorting: true },
    { id: 'users_count', label: 'User Count' },
    { id: 'created_at', label: 'Created At', disableSorting: true },
    { id: 'updated_at', label: 'Updated At', disableSorting: true },
]

export default function Companies() {

    const classes = useStyles();
    const [records, setRecords] = useState([])
    const [role, setRole] = useState('')
    const [countUserFilters, setCountUserFilters] = useState({})
    const [countCompanyFilters, setCountCompanyFilters] = useState({})
    const [order, setSortingOrder] = useState('asc')
    const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
    const data = [{label: 'Companies', data: countCompanyFilters}, {label: 'Users', data: countUserFilters}]
    
    const {
        TblContainer,
        TblHead
    } = useTable(records, headCells, filterFn, setSortingOrder);

    

    //Fetch companies based on company role and user role with user's count
    const getCompanies = async (role = '', order = 'asc') => {
        const url = `/companies?role=${role}&order=${order}`;
        await fetch(url, { method: 'GET'})
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setRecords(response.companies))
          .catch(() => this.props.history.push("/"))
    }

    // Fetch count of companies based on comapany and user role
    const getCompanyFilterByRole = async () => {
        const url1 = `/companies/filter_by_roles_count`;
        await fetch(url1, { method: 'GET'})
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setCountCompanyFilters(response.companies_count_by_roles))
          .catch(() => this.props.history.push("/"))
    }

    const getUserFilterByRole = async () => {
        const url1 = `users/filter_by_roles_count`;
        await fetch(url1, { method: 'GET'})
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => setCountUserFilters(response.user_count_by_roles))
          .catch(() => this.props.history.push("/"))
    }

    const fetchCompanies = async (role, order) => {
        setRole(role)
        await getCompanies(role, order)
    }

    useEffect(async () => {
        await Promise.all([getUserFilterByRole(), getCompanyFilterByRole()])
    }, [])

    useEffect(async () => {
        await getCompanies(role, order)
    }, [order])

    return (
        <>
            
            <PageHeader
                title="Companies"
                subTitle="List of companies"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
                <Paper className={classes.pageContent}>
                    <CountGrid order={order} role={setRole} className={classes.countGrid} data={data} onClick={fetchCompanies}/>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {
                                records.map(item =>
                                    (<TableRow key={item.id}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.users_count}</TableCell>
                                        <TableCell>{moment(item.created_at).format('YYYY/MM/DD')}</TableCell>
                                        <TableCell>{moment(item.updated_at).format('YYYY/MM/DD')}</TableCell>
                                    </TableRow>)
                                )
                            }
                        </TableBody>
                    </TblContainer>
                </Paper>
        </>
    )
}