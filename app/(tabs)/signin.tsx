import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';

export default function SignInScreen({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateAndSubmit = () => {
    if (username.length < 5) {
    Alert.alert('Invalid Username', 'Username must be at least 5 characters long.');
    return;
    }
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
    Alert.alert(
        'Invalid Password',
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
    );
    return;
    }
    Alert.alert('Success', 'You are signed in!', [
    { text: 'Go to Home'},
    ]);
};

    return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.label}>Username</ThemedText>
        <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        />

        <ThemedText style={styles.label}>Password</ThemedText>
        <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <Button title="Sign In" onPress={validateAndSubmit} />
    </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    },
    label: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    },
    input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 8,
    },
});