#!/bin/bash
set -x
# Chemin vers le répertoire de votre site web sur le serveur
SITE_DIR="/var/www/portfolio"

# Accédez au répertoire du site web
cd "$SITE_DIR"

# Définissez l'utilisateur Git (le cas échéant)
GIT_USER="BlackSheepsTV"

# Définissez la branche Git que vous souhaitez déployer
BRANCH="master"

# Nom du répertoire de sauvegarde (pour sauvegarder l'état actuel du site)
# BACKUP_DIR="/var/backups/portfolio_backup"

# Sauvegardez l'état actuel du site (facultatif, mais recommandé)
# mkdir -p "$BACKUP_DIR"
# tar czf "$BACKUP_DIR/backup_$(date +\%Y\%m\%d_\%H\%M\%S).tar.gz" ./*

# Mettez à jour le dépôt Git
sudo -u "$GIT_USER" git pull origin "$BRANCH"

# Autres actions de déploiement (par exemple, redémarrage de serveurs, compilation, etc.)
# ...

# Redémarrez votre serveur web (exemple pour Apache)
sudo /etc/init.d/nginx restart

echo "Mise à jour terminée."
