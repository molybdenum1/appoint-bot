import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required")
}

const sql = postgres(connectionString)

async function testConnection() {
  try {
    const result = await sql`SELECT NOW() as time, version() as version`
    if (result.length === 0) {
      console.error('❌ Database connection failed: No results returned')
      process.exit(1)
    }
    console.log('✅ Database connected successfully!')
    console.log('📅 Server time:', result[0]?.time)
    console.log('🗄️  PostgreSQL version:', result[0]?.version)
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    process.exit(1)
  }
}

testConnection()

export default sql