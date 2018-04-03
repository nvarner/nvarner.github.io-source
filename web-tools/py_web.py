import argparse
import json

import sass
from rcssmin import cssmin

parser = argparse.ArgumentParser(description="Run web tools")
parser.add_argument("config", type=str, help="The config JSON file")

args = parser.parse_args()

with open(args.config) as config_file:
    config = json.load(config_file)

for file_config in config:
    with open(file_config["input"]) as file:
        file_string = "".join(file.readlines())

    for operation in file_config["operations"]:
        if operation == "scss_to_css":
            file_string = sass.compile(string=file_string)
        elif operation == "min_css":
            file_string = cssmin(file_string)

    with open(file_config["output"], "w") as file:
        file.write(file_string)
