import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '100%'
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1, 
        borderColor: "lightgrey"
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
       width: 30,
       height: 30, 
       borderWidth: 1, 
       borderColor: '#676767',
       borderRadius: 15,
       justifyContent: 'center',
       alignItems: 'center',
    },
    guestValue: {
        marginHorizontal: 20,
        fontSize: 16
    },
    operationSign: {
        fontSize: 20,
        color: '#474747'
    },
    guestSearchButtonContainer: {
        marginBottom: 40,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default styles