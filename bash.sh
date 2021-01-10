#!/bin/bash
# Script Para Backup De banco De Dados SQL Server + SQLCMD Para Amazon AWS

# Add arquivos ao git
echo " "
echo "-----------------------------------------------------------------------------"
echo "------------------- $(date) -------------------"

git add -A

# commita os arquivos
echo " "
echo "-----------------------------------------------------------------------------"
echo "------------------- $(date) -------------------"

git commit -m "Atualizando a doc"

# push
echo " "
echo "-----------------------------------------------------------------------------"
echo "------------------- $(date) -------------------"

git push -u origin master


echo " Acabou"
echo "-----------------------------------------------------------------------------"
echo "------------------- $(date) -------------------"



#npx apidoc -i ./src/http/routes/doctoralia -o ../doc-doctoralia
#npx apidoc -i ./src/http/routes/api-risc -o ../doc-api-risc