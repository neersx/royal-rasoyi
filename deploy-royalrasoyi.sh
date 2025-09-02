#!/bin/bash

# chmod +x /var/www/royalrasoyi/royalrasoyi/deploy-royalrasoyi.sh
# bash /var/www/royalrasoyi/royalrasoyi/deploy-royalrasoyi.sh

set -e  # Exit immediately on error

echo "🚀 Starting Royal Rasoyi Deployment (branch: release)..."

# Define paths
REPO_DIR="/var/www/royalrasoyi/royalrasoyi"
CLIENT_DIR="$REPO_DIR/royal-rasoyi"
DEPLOY_DIR="/var/www/royalrasoyi/html"

# Generate timestamp for backup
DATE_TAG=$(date +"%d%b%Y-%H%M" | tr '[:upper:]' '[:lower:]')
BACKUP_DIR="$DEPLOY_DIR/backup-$DATE_TAG"

# ---- STOP EXISTING SERVICE ----
echo "📦 Stopping existing SSR service..."
sudo systemctl stop royalrasoyi-app || true

# ---- GIT SYNC ----
echo "🔁 Switching to release branch and pulling latest..."
cd "$REPO_DIR"
git reset --hard
git fetch origin
git checkout release
git rebase origin/release

# ---- BACKUP CURRENT DEPLOYMENT ----
echo "🗂️ Creating backup at: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"

[ -d "$DEPLOY_DIR/browser" ] && cp -r "$DEPLOY_DIR/browser" "$BACKUP_DIR/"
[ -d "$DEPLOY_DIR/server" ] && cp -r "$DEPLOY_DIR/server" "$BACKUP_DIR/"

echo "✅ Backup complete."

# ---- BUILD ANGULAR SSR ----
echo "🧱 Installing Angular dependencies..."
cd "$CLIENT_DIR"
npm install --force

echo "🏗️ Building Angular SSR (browser + server)..."
ng build --configuration production

# ---- COPY ANGULAR BUILD ----
echo "🚚 Copying Angular build to deployment folders..."
rm -rf "$DEPLOY_DIR/browser"
rm -rf "$DEPLOY_DIR/server"

cp -r dist/royal-rasoyi/browser "$DEPLOY_DIR/browser"
cp -r dist/royal-rasoyi/server "$DEPLOY_DIR/server"

# ---- PERMISSIONS ----
echo "🔐 Fixing permissions..."
sudo chown -R www-data:www-data "$DEPLOY_DIR"
sudo chmod -R 755 "$DEPLOY_DIR"

# ---- START SSR SERVICE ----
echo "🚀 Restarting Royal Rasoyi SSR service..."
sudo systemctl start royalrasoyi-app

# ---- NGINX ----
echo "🌐 Reloading Nginx config..."
sudo nginx -t && sudo systemctl reload nginx

echo "✅ Deployment complete! Visit: https://royalrasoyi.com"
