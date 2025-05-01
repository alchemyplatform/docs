import os

def process_file(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    new_lines = []
    method_block = []
    in_method = False

    def is_method_start(line):
        stripped = line.lstrip()
        return stripped.startswith("- name:")

    for i, line in enumerate(lines):
        stripped = line.lstrip()

        if is_method_start(line):
            # If we were already inside a method, process the last one first
            if in_method:
                new_lines.extend(process_method_block(method_block))
                method_block = [line]
            else:
                method_block = [line]
                in_method = True
        elif in_method:
            # If another method starts (but only if it's top-level or slightly indented)
            if is_method_start(line) and (len(line) - len(line.lstrip())) <= 2:
                new_lines.extend(process_method_block(method_block))
                method_block = [line]
            else:
                method_block.append(line)
        else:
            new_lines.append(line)

    # Process last method block if present
    if in_method and method_block:
        new_lines.extend(process_method_block(method_block))

    # Only overwrite the file if changes were made
    if new_lines != lines:
        with open(file_path, 'w') as f:
            f.writelines(new_lines)
        print(f"Updated: " + file_path)
    else:
        print(f"No changes made to: " + file_path)

def process_method_block(block_lines):
    has_description = any(
        l.lstrip().startswith("description:") and (len(l) - len(l.lstrip())) <= 2
        for l in block_lines
    )
    new_block = []

    if has_description:
        return block_lines

    for line in block_lines:
        stripped = line.lstrip()
        if stripped.startswith("summary:"):
            indent = line[:len(line) - len(stripped)]
            new_block.append(indent + "description:" + line[len(indent) + len("summary:"):])
        else:
            new_block.append(line)

    return new_block


def process_directory(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        if os.path.basename(dirpath) == 'methods':
            for filename in filenames:
                if filename.endswith('.yaml'):
                    process_file(os.path.join(dirpath, filename))

if __name__ == "__main__":
    process_directory("src/openrpc/chains")
