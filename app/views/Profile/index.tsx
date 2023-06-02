import React, { useContext } from 'react'
import { Button } from '../../components/UiKit/Button'
import { SessionContext } from '../../context/SessionContext'
import { ServiceAuthLogout } from '../../service/api/AuthService'

import { Container } from './styles'

const Profile: React.FC = () => {
    const { setEvent, cleanOnDevice } = useContext(SessionContext)
    const handlerLogout = async () => {
        await ServiceAuthLogout()
        setEvent('outdoor')
        cleanOnDevice()
    }
    return (
        <Container>
            <Button title='Logout' onPress={handlerLogout} />
        </Container>
    )
}

export default Profile