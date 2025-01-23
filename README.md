Here’s a `README.md` file outlining the entire process to create and configure the `royalrasoyi` service and run the container:

---

```markdown
# Royal Rasoyi Service Setup Guide

This document provides step-by-step instructions to create, configure, and run the `royalrasoyi` service. This service automates the following tasks:
1. Navigate to the project directory.
2. Pull the latest changes from the `origin/master` branch using `git fetch` and `git rebase`.
3. Build a Docker image from the `Dockerfile` in the directory.
4. Stop and restart the container using the updated image.

---

## Prerequisites
- A Linux-based system (e.g., Ubuntu).
- Git installed on the system.
- Docker installed and running.
- Access to the `/var/source/royal-rasoyi/royal-rasoyi/` project directory.

---

## Steps to Create and Configure the Service

### 1. Create the Shell Script
Create a script file at `/usr/local/bin/royalrasoyi.sh`:
```bash
sudo nano /usr/local/bin/royalrasoyi.sh
```

Paste the following content:
```bash
#!/bin/bash

# Variables
PROJECT_DIR="/var/source/royal-rasoyi/royal-rasoyi"
DOCKER_IMAGE="neers/royalrasoi"
CONTAINER_NAME="royalrasoi-container"

# Navigate to project directory
cd $PROJECT_DIR || { echo "Project directory not found!"; exit 1; }

# Pull latest changes from git
echo "Fetching latest changes..."
git fetch || { echo "Git fetch failed!"; exit 1; }
git rebase origin/master || { echo "Git rebase failed!"; exit 1; }

# Check for Dockerfile
if [ ! -f Dockerfile ]; then
  echo "Dockerfile not found in $PROJECT_DIR!"
  exit 1
fi

# Generate an incremental tag
TAG=$(date +%m%d%H)
FULL_IMAGE_TAG="$DOCKER_IMAGE:$TAG"

# Build Docker image
echo "Building Docker image..."
docker build -t $FULL_IMAGE_TAG . || { echo "Docker build failed!"; exit 1; }

# Stop and remove the existing container
echo "Stopping existing container..."
docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME || echo "No existing container to stop."

# Run the container with the new image
echo "Running container ${CONTAINER_NAME} with image ${IMAGE_NAME}:${NEW_TAG}..."
docker run --name "${CONTAINER_NAME}" -p 4000:4000 --restart unless-stopped -d   "${IMAGE_NAME}:${NEW_TAG}" || { echo "Failed to start container! Exiting."; exit 1; }

echo "Service completed successfully!"
```

Save and exit the file.

---

### 2. Make the Script Executable
Set the executable permission for the script:
```bash
sudo chmod +x /usr/local/bin/royalrasoyi.sh
```

---

### 3. Create the Service File
Create a systemd service file for `royalrasoyi`:
```bash
sudo nano /etc/systemd/system/royalrasoyi.service
```

Paste the following content:
```ini
[Unit]
Description=Royal Rasoyi Git Update and Docker Service
After=network.target docker.service

[Service]
ExecStart=/usr/local/bin/royalrasoyi.sh
Restart=on-failure
User=root

[Install]
WantedBy=multi-user.target
```

Save and exit the file.

---

### 4. Reload systemd and Enable the Service
Reload the systemd daemon to recognize the new service:
```bash
sudo systemctl daemon-reload
```

Enable the service to start automatically on boot:
```bash
sudo systemctl enable royalrasoyi.service
```

---

### 5. Test the Script Manually
Before starting the service, test the script manually to ensure it works:
```bash
sudo /usr/local/bin/royalrasoyi.sh
```

---

### 6. Start the Service
Start the service:
```bash
sudo systemctl start royalrasoyi.service
```

---

### 7. Verify the Service
Check the status of the service to ensure it's running successfully:
```bash
sudo systemctl status royalrasoyi.service
```

---

### 8. Troubleshooting
If the service fails, check the logs for detailed error messages:
```bash
sudo journalctl -u royalrasoyi.service -e
```

---

## Notes
- The Docker image is tagged with the current timestamp for versioning.
- Ensure the project directory exists and contains a valid `Dockerfile`.
- Update `PROJECT_DIR`, `DOCKER_IMAGE`, and `CONTAINER_NAME` variables in the script as needed.

---

## Example Output
When the service runs successfully, you should see:
1. Latest code fetched and rebased.
2. Docker image built with a timestamped tag.
3. Existing container stopped and removed.
4. New container started with the updated image.

```
Fetching latest changes...
Building Docker image...
Stopping existing container...
Running new container...
Service executed successfully!
```

---

## Cleanup
To stop and disable the service:
```bash
sudo systemctl stop royalrasoyi.service
sudo systemctl disable royalrasoyi.service
```

---

## References
- [systemd Documentation](https://www.freedesktop.org/wiki/Software/systemd/)
- [Docker Documentation](https://docs.docker.com/)
- [Git Documentation](https://git-scm.com/doc)

