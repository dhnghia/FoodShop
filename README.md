
** client-app
npm install next
npm run dev

npm run build-export
npm outdated
npx next --version

** server-app
dotnet restore
dotnet run
dotnet publish -c Release -o ./publish




dotnet ef database update --context HrLeaveManagementIdentityDbContext
dotnet ef database update --context HrDatabaseContext
dotnet add reference ..\Application\Application.csproj ..\Infrastructure\Infrastructure.csproj ..\Presentation\Presentation.csproj