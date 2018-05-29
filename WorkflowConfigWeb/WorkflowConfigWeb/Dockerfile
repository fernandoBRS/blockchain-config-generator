FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY WorkflowConfigWeb/WorkflowConfigWeb.csproj WorkflowConfigWeb/
RUN dotnet restore WorkflowConfigWeb/WorkflowConfigWeb.csproj
COPY . .
WORKDIR /src/WorkflowConfigWeb
RUN dotnet build WorkflowConfigWeb.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish WorkflowConfigWeb.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WorkflowConfigWeb.dll"]
