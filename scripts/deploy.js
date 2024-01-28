async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
    // Desplegar el token de prueba primero
    const TestToken = await ethers.getContractFactory("TestToken");
    const testToken = await TestToken.deploy(10000000000);
    await testToken.deployed();
    console.log("TestToken deployed to:", testToken.address);
    // Asegúrate de reemplazar "2" con la cantidad de decimales que tienen tus tokens
    await testToken.transfer(deployer.address, ethers.utils.parseUnits("10000", 2));
    // Ahora desplegar el contrato "PrestamoContrato" con la dirección del token
    const PrestamoContrato = await ethers.getContractFactory("PrestamoContrato");
    const prestamoContrato = await PrestamoContrato.deploy(testToken.address);
    await prestamoContrato.deployed();
    console.log("PrestamoContrato deployed to:", prestamoContrato.address);
    // Aprobar al contrato PrestamoContrato para retirar los tokens
    // Asegúrate de reemplazar "2" con la cantidad de decimales que tienen tus tokens
    await testToken.approve(prestamoContrato.address, ethers.utils.parseUnits("10000", 2));
    // Solicitar un préstamo
    await prestamoContrato.crearPrestamo(ethers.utils.parseEther("50"), 12);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });