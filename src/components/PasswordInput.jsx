function PasswordInput() {
    function handlePasswordChange() {
        console.log('Entering password...');
    }

    return (
        <input
            type="password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
        />
    );
}

export default PasswordInput;