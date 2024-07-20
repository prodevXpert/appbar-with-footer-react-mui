import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function BreadCumb({ BreadCrumbOption }) {
  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(`${link}`)
  }

  return (
    <Box
      role='presentation'
      sx={{
        paddingY: '20px',
      }}
    >
      <Breadcrumbs aria-label='breadcrumb'>
        {BreadCrumbOption.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => handleNavigate(item?.link)}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                fontSize: '20px',
                color: item?.color || 'inherit',
              }}
            >
              {item?.name || 'Unnamed Link'}
            </span>

            // <Link
            //   key={index}
            //   underline='hover'
            //   color={item?.color}
            //   href={item.link}
            //   style={{
            //     textDecoration: 'none',
            //     fontSize: '20px',
            //   }}
            // >
            //   {item.name}
            // </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadCumb
