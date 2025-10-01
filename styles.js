import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2dffcaff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#222',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 24,
        resizeMode: 'contain',
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16,
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: '#ffffffff',
        color: '#333',
    },
    inputFocused: {
        borderColor: '#007AFF',
        borderWidth: 2,
        shadowColor: '#007AFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    inputError: {
        borderColor: '#FF3B30',
        borderWidth: 2,
    },
    reviewText: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#000000ff',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16,
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: '#2fffe3ff',
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 30,
    },
    button: {
        flex: 1,
        marginHorizontal: 10,
    },
});

export default styles;