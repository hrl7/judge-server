module.exports = {
	type: "sqlite",
  database: "db/dev.sqlite",
	entities: ["dist/**/*.entity{.ts,.js}"],
	synchronize: true,
}
